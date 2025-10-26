"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Device {
  id: number;
  category: string;
  name: string;
  watts: number;
  time: {
    value: number;
    unit: "hours" | "minutes";
  };
}

const initialDevices: Device[] = [
  { id: 1, category: "Електроніка", name: "Лампа", watts: 10, time: { value: 1, unit: "hours" } },
  { id: 2, category: "Електроніка", name: "Роутер", watts: 10, time: { value: 1, unit: "hours" } },
  { id: 3, category: "Електроніка", name: "Смартфон", watts: 15, time: { value: 1, unit: "hours" } },
  { id: 4, category: "Електроніка", name: "Дрон", watts: 60, time: { value: 1, unit: "hours" } },
  { id: 5, category: "Електроніка", name: "StarLink", watts: 50, time: { value: 3, unit: "hours" } },
  { id: 6, category: "Електроніка", name: "Вентилятор", watts: 40, time: { value: 2, unit: "hours" } },
  { id: 7, category: "Електроніка", name: "Телевізор", watts: 70, time: { value: 2, unit: "hours" } },
  { id: 8, category: "Електроніка", name: "Монітор", watts: 50, time: { value: 2, unit: "hours" } },
  { id: 9, category: "Електроніка", name: "Проектор", watts: 100, time: { value: 2, unit: "hours" } },
  { id: 10, category: "Електроніка", name: "Ноутбук", watts: 60, time: { value: 2, unit: "hours" } },
  { id: 11, category: "Електроніка", name: "Комп’ютер", watts: 150, time: { value: 2, unit: "hours" } },
  { id: 12, category: "Електроніка", name: "Ігрові приставки", watts: 120, time: { value: 1, unit: "hours" } },
  { id: 13, category: "Електроніка", name: "Принтер/Сканер", watts: 40, time: { value: 0.5, unit: "hours" } },
  { id: 20, category: "Велика побутова техніка", name: "Холодильник", watts: 100, time: { value: 10, unit: "hours" } },
  { id: 21, category: "Велика побутова техніка", name: "Пральна машина", watts: 500, time: { value: 1, unit: "hours" } },
  { id: 22, category: "Велика побутова техніка", name: "Конвекторні обігрівачі", watts: 1200, time: { value: 1, unit: "hours" } },
  { id: 23, category: "Велика побутова техніка", name: "Водонагрівачі", watts: 1500, time: { value: 1, unit: "hours" } },
  { id: 24, category: "Велика побутова техніка", name: "Обігрівачі", watts: 1500, time: { value: 1, unit: "hours" } },
  { id: 25, category: "Велика побутова техніка", name: "Тепловентилятори", watts: 1200, time: { value: 1, unit: "hours" } },
  { id: 26, category: "Велика побутова техніка", name: "Плити", watts: 1000, time: { value: 1, unit: "hours" } },
  { id: 27, category: "Велика побутова техніка", name: "Духовка", watts: 1800, time: { value: 1, unit: "hours" } },
  { id: 28, category: "Велика побутова техніка", name: "Кондиціонер", watts: 900, time: { value: 3, unit: "hours" } },
  { id: 29, category: "Велика побутова техніка", name: "Сушильна машина", watts: 800, time: { value: 1, unit: "hours" } },
  { id: 30, category: "Дрібна побутова техніка", name: "Блендер", watts: 300, time: { value: 0.1, unit: "hours" } },
  { id: 31, category: "Дрібна побутова техніка", name: "Мультиварка", watts: 700, time: { value: 1, unit: "hours" } },
  { id: 32, category: "Дрібна побутова техніка", name: "Кавоварка", watts: 900, time: { value: 0.2, unit: "hours" } },
  { id: 33, category: "Дрібна побутова техніка", name: "Гриль", watts: 1000, time: { value: 0.5, unit: "hours" } },
  { id: 34, category: "Дрібна побутова техніка", name: "Фен", watts: 1000, time: { value: 0.5, unit: "hours" } },
  { id: 35, category: "Дрібна побутова техніка", name: "Мікрохвильовка", watts: 1200, time: { value: 0.5, unit: "hours" } },
  { id: 36, category: "Дрібна побутова техніка", name: "Електрочайник", watts: 1500, time: { value: 0.2, unit: "hours" } },
  { id: 40, category: "Інструменти", name: "Акумуляторна лобзики", watts: 400, time: { value: 1, unit: "hours" } },
  { id: 41, category: "Інструменти", name: "Дриль", watts: 800, time: { value: 1, unit: "hours" } },
  { id: 42, category: "Інструменти", name: "Акумуляторні шуруповерти", watts: 500, time: { value: 1, unit: "hours" } },
  { id: 43, category: "Інструменти", name: "Акумуляторні тримери або коси", watts: 1000, time: { value: 1, unit: "hours" } },
  { id: 44, category: "Інструменти", name: "Лобзики", watts: 600, time: { value: 1, unit: "hours" } },
  { id: 45, category: "Інструменти", name: "Бетономішувачі", watts: 1200, time: { value: 2, unit: "hours" } },
  { id: 46, category: "Інструменти", name: "Зварювальний апарат", watts: 1500, time: { value: 1, unit: "hours" } },
  { id: 47, category: "Інструменти", name: "Компресор", watts: 1200, time: { value: 1, unit: "hours" } },
];

export default function PowerCalculator() {
  const [devices, setDevices] = useState(initialDevices);
  const [selected, setSelected] = useState<number[]>([]);
  const inverterEfficiency = 0.9;
  const depthOfDischarge = 0.85;

  const toggleDevice = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((deviceId) => deviceId !== id) : [...prev, id]));
  };

  const updateDevice = (id: number, field: keyof Device | "time", value: number | Partial<Device["time"]>) => {
    setDevices((prev) =>
      prev.map((device) => {
        if (device.id !== id) {
          return device;
        }

        if (field === "time" && typeof value === "object") {
          return { ...device, time: { ...device.time, ...value } };
        }

        if (field === "watts" && typeof value === "number") {
          return { ...device, watts: value };
        }

        return device;
      })
    );
  };

  const handleIncrement = (id: number, field: "watts" | "time", step: number) => {
    setDevices((prev) =>
      prev.map((device) => {
        if (device.id !== id) {
          return device;
        }

        if (field === "watts") {
          return { ...device, watts: Math.max(0, device.watts + step) };
        }

        return { ...device, time: { ...device.time, value: Math.max(0, device.time.value + step) } };
      })
    );
  };

  const total = useMemo(() => {
    const chosenDevices = devices.filter((device) => selected.includes(device.id));

    const totalWh = chosenDevices.reduce((sum, device) => {
      const timeInHours = device.time.unit === "hours" ? device.time.value : device.time.value / 60;
      return sum + device.watts * timeInHours;
    }, 0);

    return Math.round(totalWh / inverterEfficiency / depthOfDischarge);
  }, [devices, selected, inverterEfficiency, depthOfDischarge]);

  const recommendedStation = total < 500 ? "EB3A (300–500 Wh)" : total < 1500 ? "AC60 (600–1200 Wh)" : "AC200P (2000 Wh+)";

  const categories = ["Електроніка", "Велика побутова техніка", "Дрібна побутова техніка", "Інструменти"];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100 p-6 md:p-10">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Калькулятор потужності зарядної станції</h1>
          <p className="text-gray-300 max-w-3xl">
            Оберіть техніку, яку ви плануєте підключати. Ми автоматично розрахуємо потребу в енергії та підкажемо оптимальну станцію.
          </p>
        </header>

        {categories.map((category) => (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-3 border-b border-[#8b5cf6]/40 pb-2">{category}</h2>
            <div className="flex flex-wrap gap-3">
              {devices
                .filter((device) => device.category === category)
                .map((device) => (
                  <button
                    key={device.id}
                    onClick={() => toggleDevice(device.id)}
                    className={`px-4 py-2 rounded-xl border text-sm transition-all duration-200 ${
                      selected.includes(device.id)
                        ? "bg-[#8b5cf6] border-[#a78bfa] text-white shadow-lg"
                        : "bg-[#2a1b40]/40 border-[#8b5cf6]/30 text-gray-300 hover:bg-[#3a1b5a]/50"
                    }`}
                  >
                    {device.name}
                  </button>
                ))}
            </div>
          </section>
        ))}

        {selected.length > 0 && (
          <div className="mt-10 bg-[#2a1b40]/50 border border-[#8b5cf6]/40 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Вибрані пристрої</h3>
            <table className="w-full text-sm text-gray-200 border-collapse">
              <thead>
                <tr className="bg-[#3a1b5a]/60 text-left">
                  <th className="p-2">Пристрій</th>
                  <th className="p-2">Потужність (Вт)</th>
                  <th className="p-2">Час живлення</th>
                  <th className="p-2">Одиниця</th>
                  <th className="p-2">Споживання</th>
                  <th className="p-2 text-right">Видалити</th>
                </tr>
              </thead>
              <tbody>
                {devices
                  .filter((device) => selected.includes(device.id))
                  .map((device) => {
                    const timeInHours = device.time.unit === "hours" ? device.time.value : device.time.value / 60;
                    const energy = Math.round(device.watts * timeInHours);

                    return (
                      <tr key={device.id} className="odd:bg-[#1f102f]/40 even:bg-[#26183a]/40">
                        <td className="p-2">{device.name}</td>
                        <td className="p-2">
                          {device.name === "Комп’ютер" ? (
                            <Select
                              onValueChange={(value) => {
                                let watts = 150;
                                if (value === "office") watts = 100;
                                if (value === "gaming") watts = 300;
                                if (value === "workstation") watts = 500;
                                updateDevice(device.id, "watts", watts);
                              }}
                            >
                              <SelectTrigger className="bg-[#1f102f] border border-[#8b5cf6]/40 text-white w-48">
                                <SelectValue placeholder="Тип комп’ютера" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#1f102f] text-white border border-[#8b5cf6]/40">
                                <SelectItem value="office">Офісний ПК (100 Вт)</SelectItem>
                                <SelectItem value="gaming">Ігровий ПК (300 Вт)</SelectItem>
                                <SelectItem value="workstation">Робоча станція (500 Вт)</SelectItem>
                              </SelectContent>
                            </Select>
                          ) : device.name === "Монітор" ? (
                            <Select
                              onValueChange={(value) => {
                                let watts = 50;
                                if (value === "small") watts = 40;
                                if (value === "large") watts = 70;
                                if (value === "pro") watts = 100;
                                updateDevice(device.id, "watts", watts);
                              }}
                            >
                              <SelectTrigger className="bg-[#1f102f] border border-[#8b5cf6]/40 text-white w-48">
                                <SelectValue placeholder="Тип монітора" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#1f102f] text-white border border-[#8b5cf6]/40">
                                <SelectItem value="small">Монітор до 27″ (40 Вт)</SelectItem>
                                <SelectItem value="large">Монітор від 27″ (70 Вт)</SelectItem>
                                <SelectItem value="pro">Ігровий або професійний (100 Вт)</SelectItem>
                              </SelectContent>
                            </Select>
                          ) : (
                            <div className="flex items-center justify-center gap-1">
                              <Button onClick={() => handleIncrement(device.id, "watts", -10)} className="text-[#8b5cf6] hover:text-[#a78bfa] bg-transparent">
                                –
                              </Button>
                              <Input
                                type="number"
                                step={10}
                                value={device.watts}
                                onChange={(event) => updateDevice(device.id, "watts", Number(event.target.value))}
                                className="text-center w-16 border border-[#8b5cf6]/40 bg-[#1f102f] text-white"
                              />
                              <Button onClick={() => handleIncrement(device.id, "watts", 10)} className="text-[#8b5cf6] hover:text-[#a78bfa] bg-transparent">
                                +
                              </Button>
                            </div>
                          )}
                        </td>
                        <td className="p-2">
                          <div className="flex items-center justify-center gap-1">
                            <Button
                              onClick={() => handleIncrement(device.id, "time", device.time.unit === "hours" ? -1 : -5)}
                              className="text-[#8b5cf6] hover:text-[#a78bfa] bg-transparent"
                            >
                              –
                            </Button>
                            <Input
                              type="number"
                              step={device.time.unit === "hours" ? 1 : 5}
                              value={device.time.value}
                              onChange={(event) => updateDevice(device.id, "time", { value: Number(event.target.value) })}
                              className="text-center w-16 border border-[#8b5cf6]/40 bg-[#1f102f] text-white"
                            />
                            <Button
                              onClick={() => handleIncrement(device.id, "time", device.time.unit === "hours" ? 1 : 5)}
                              className="text-[#8b5cf6] hover:text-[#a78bfa] bg-transparent"
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="p-2">
                          <Select value={device.time.unit} onValueChange={(value) => updateDevice(device.id, "time", { unit: value as Device["time"]["unit"] })}>
                            <SelectTrigger className="bg-[#1f102f] border border-[#8b5cf6]/40 text-white w-24">
                              <SelectValue placeholder="год" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1f102f] text-white border border-[#8b5cf6]/40">
                              <SelectItem value="hours">год</SelectItem>
                              <SelectItem value="minutes">хв</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                          <td className="p-2 text-[#b794f4] font-semibold">{energy} Wh</td>
                        <td className="p-2 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleDevice(device.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-500/10 rounded-full w-8 h-8 flex items-center justify-center"
                          >
                            ✕
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card className="bg-[#2a1b40]/50 border border-[#8b5cf6]/40">
            <CardContent className="p-6">
              <h3 className="text-lg text-gray-300 mb-1">Загальне споживання</h3>
              <p className="text-3xl font-bold text-[#b794f4]">{total} Wh</p>
              <p className="text-xs text-gray-400 mt-2">Враховано ККД інвертора (≈90%) та запас ємності (15%).</p>
            </CardContent>
          </Card>

          <Card className="bg-[#2a1b40]/50 border border-[#8b5cf6]/40">
            <CardContent className="p-6">
              <h3 className="text-lg text-gray-300 mb-1">Рекомендована станція</h3>
              <p className="text-xl font-semibold text-white">{recommendedStation}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#2a1b40]/50 border border-[#8b5cf6]/40">
            <CardContent className="p-6 flex flex-col gap-3">
              <Button className="bg-[#8b5cf6] hover:bg-[#a78bfa] text-white font-medium py-2 rounded-lg">Підібрати станцію</Button>
              <Button variant="outline" className="border-[#8b5cf6] text-[#b794f4] hover:bg-[#3a1b5a]/50 font-medium py-2 rounded-lg">
                Консультація
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          *Результати орієнтовні. Розрахунок базується на типовому споживанні пристроїв.
        </p>
      </motion.div>
    </div>
  );
}

