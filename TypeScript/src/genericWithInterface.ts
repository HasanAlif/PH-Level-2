interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X ;
}

const poorDeveloper: Developer<{
  heartRate: string;
  stopWatch: boolean;
}> = {
  name: "John Doe",
  salary: 50000,
  device: {
    brand: "Dell",
    model: "XPS 13",
    releasedYear: "2020",
  },
  smartWatch: {
    heartRate: "80 bpm",
    stopWatch: true,
  },
};

const richDeveloper: Developer<{
  heartRate: string;
  gps: boolean;
  calculator: boolean;
  AIFeature: string;
}> = {
  name: "Jane Smith",
  salary: 150000,
  device: {
    brand: "Apple",
    model: "MacBook Pro",
    releasedYear: "2021",
  },
  smartWatch: {
    heartRate: "70 bpm",
    gps: true,
    calculator: true,
    AIFeature: "Siri Integration",
  },
  bike: null
};
