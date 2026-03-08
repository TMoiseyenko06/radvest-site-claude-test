"use client";

import { useState, useEffect, useCallback } from "react";

interface TempService {
  id: string;
  date: string;
  hour: number;
  minute: number;
  name: string;
  nameEn: string;
  durationHours: number;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [services, setServices] = useState<TempService[]>([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    date: "",
    hour: "10",
    minute: "00",
    name: "",
    nameEn: "",
    durationHours: "2",
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const fetchServices = useCallback(async () => {
    const res = await fetch("/api/admin/services", {
      headers: { Authorization: `Bearer ${password}` },
    });
    if (res.ok) {
      const data = await res.json();
      setServices(data);
    }
  }, [password]);

  useEffect(() => {
    if (authenticated) {
      fetchServices();
    }
  }, [authenticated, fetchServices]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      setAuthenticated(true);
    } else {
      const data = await res.json();
      setAuthError(data.error || "Login failed");
    }
  }

  async function handleAddService(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!formData.date || !formData.name) {
      setFormError("Date and service name are required");
      return;
    }

    const res = await fetch("/api/admin/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify({
        date: formData.date,
        hour: Number(formData.hour),
        minute: Number(formData.minute),
        name: formData.name,
        nameEn: formData.nameEn || formData.name,
        durationHours: Number(formData.durationHours),
      }),
    });

    if (res.ok) {
      setFormSuccess("Service added successfully");
      setFormData({
        date: "",
        hour: "10",
        minute: "00",
        name: "",
        nameEn: "",
        durationHours: "2",
      });
      fetchServices();
    } else {
      const data = await res.json();
      setFormError(data.error || "Failed to add service");
    }
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/admin/services?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${password}` },
    });

    if (res.ok) {
      fetchServices();
    }
  }

  function formatServiceDate(service: TempService) {
    const date = new Date(service.date + "T00:00:00");
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${dayNames[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }

  function formatTime(hour: number, minute: number) {
    const ampm = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 || 12;
    return `${h12}:${String(minute).padStart(2, "0")} ${ampm}`;
  }

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-warm flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <h1 className="text-2xl font-bold text-primary">Admin</h1>
              <p className="text-sm text-gray-500 mt-1">
                Church Administration Panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {authError && (
                <p className="text-sm text-red-600 bg-red-50 p-2 rounded">{authError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-warm">
      {/* Header */}
      <div className="bg-primary text-white py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <p className="text-sm text-white/70">Manage temporary services</p>
          </div>
          <button
            onClick={() => {
              setAuthenticated(false);
              setPassword("");
            }}
            className="px-4 py-2 text-sm border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Add Service Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-primary mb-4">
            Add Temporary Service
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Add a one-time service that will appear in the countdown and schedule. It will automatically disappear after the date passes.
          </p>

          <form onSubmit={handleAddService} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hour
                  </label>
                  <select
                    value={formData.hour}
                    onChange={(e) => setFormData({ ...formData, hour: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minute
                  </label>
                  <select
                    value={formData.minute}
                    onChange={(e) => setFormData({ ...formData, minute: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    {["00", "15", "30", "45"].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Name (Russian) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="e.g. Специальное служение"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Name (English)
                </label>
                <input
                  type="text"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="e.g. Special Service"
                />
              </div>
            </div>

            <div className="w-full sm:w-48">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (hours)
              </label>
              <select
                value={formData.durationHours}
                onChange={(e) => setFormData({ ...formData, durationHours: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              >
                {["1", "1.5", "2", "2.5", "3", "4"].map((h) => (
                  <option key={h} value={h}>{h} {Number(h) === 1 ? "hour" : "hours"}</option>
                ))}
              </select>
            </div>

            {formError && (
              <p className="text-sm text-red-600 bg-red-50 p-2 rounded">{formError}</p>
            )}
            {formSuccess && (
              <p className="text-sm text-green-600 bg-green-50 p-2 rounded">{formSuccess}</p>
            )}

            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors"
            >
              Add Service
            </button>
          </form>
        </div>

        {/* Current Temporary Services */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-primary mb-4">
            Temporary Services
          </h2>

          {services.length === 0 ? (
            <p className="text-gray-500 text-sm py-4 text-center">
              No temporary services scheduled. Add one above.
            </p>
          ) : (
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between gap-4 bg-warm rounded-xl p-4"
                >
                  <div>
                    <div className="font-bold text-primary">
                      {service.name}
                      {service.nameEn && service.nameEn !== service.name && (
                        <span className="text-gray-400 font-normal ml-2">
                          / {service.nameEn}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatServiceDate(service)} at {formatTime(service.hour, service.minute)}
                      <span className="text-gray-400 ml-2">
                        ({service.durationHours}h)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="shrink-0 px-3 py-1.5 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
