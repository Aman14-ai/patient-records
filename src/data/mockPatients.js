export const PATIENTS = [
  {
    id: 1,
    name: "John Doe",
    dob: "1985-05-20",
    visits: [
      {
        date: "2023-01-15",
        notes: "Patient reported symptoms of a common cold. Advised rest and fluids.",
        diagnosis: "Common Cold",
      },
      {
        date: "2023-03-22",
        notes: "Follow-up visit. Patient feels much better. No remaining symptoms.",
        diagnosis: "Resolved",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    dob: "1992-11-30",
    visits: [
      {
        date: "2023-02-10",
        notes: "Patient complained of persistent headaches. Blood pressure is normal.",
        diagnosis: "Tension Headaches",
      },
    ],
  },
  {
    id: 3,
    name: "Peter Jones",
    dob: "1978-07-12",
    visits: [
      {
        date: "2023-04-01",
        notes: "Annual check-up. All vitals are stable. Discussed diet and exercise.",
        diagnosis: "Healthy",
      },
      {
        date: "2022-10-18",
        notes: "Patient presented with a sprained ankle. Provided RICE instructions.",
        diagnosis: "Sprained Ankle",
      },
       {
        date: "2021-06-05",
        notes: "Routine vaccination.",
        diagnosis: "N/A",
      },
    ],
  },
];
