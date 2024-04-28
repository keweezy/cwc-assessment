function getAllKeys(obj, prefix = "") {
  return Object.keys(obj).flatMap((key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    return typeof obj[key] === "object"
      ? getAllKeys(obj[key], prefixedKey)
      : prefixedKey;
  });
}

export function downloadUsersDataAsCSV(users) {
  // Extract all keys from the objects in the array
  const allKeys = users.reduce((acc, user) => {
    const keys = getAllKeys(user);
    keys.forEach((key) => {
      if (!acc.includes(key)) acc.push(key);
    });
    return acc;
  }, []);

  // Construct headers and body
  const headers = allKeys.map((key) => JSON.stringify(key));
  const body = users.map((user) =>
    allKeys.map((key) => {
      const value = key.split(".").reduce((obj, k) => obj[k], user);
      return value !== undefined ? JSON.stringify(value) : "";
    })
  );

  // Construct CSV content
  const csvContent = [headers, ...body.map((row) => row.join(","))].join("\n");
  const csvContentEncoded = encodeURI(
    "data:text/csv;charset=utf-8," + csvContent
  );

  // Create and trigger download link
  const link = document.createElement("a");
  link.setAttribute("href", csvContentEncoded);
  link.setAttribute("download", `users_data.csv`);
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
}
