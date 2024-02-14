const departmentDetails = [
    { name: "Sales", completionPercentage: 50 },
    { name: "Marketing", completionPercentage: 57 },
    { name: "Design", completionPercentage: 83 },
    { name: "HR", completionPercentage: 78 },
    { name: "Legal", completionPercentage: 92 },
    { name: "IT", completionPercentage: 23 },
    { name: "OPS", completionPercentage: 43 },
  ];
  
  export const Data = departmentDetails.map((department, index) => ({
    id: index + 1,
    name: department.name,
    completionPercentage: department.completionPercentage,
  }));