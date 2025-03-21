export {}; // Para evitar problemas de escopo global

declare global {
  interface BloodGlucose {
    id: number,
    userId: number,
    value: number,
    timestamp: Date
  }

  interface GlycatedHemoglobin {
    id: number,
    userId: number,
    percentage: number,
    timestamp: Date
  }

  interface Weight {
    id: number,
    userId: number,
    weight: number,
    timestamp: Date
  }

  interface Height {
    id: number,
    userId: number,
    height: number,
    timestamp: Date
  }
}