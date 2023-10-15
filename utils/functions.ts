export const showName = (name: string | null | undefined) => {
  if (!name) return "";
  const nameArray = name.split(" ");
  let newName = "";

  if (nameArray.length > 2) {
    newName = `${nameArray[0]} ${nameArray[2]}`;
  } else {
    newName = `${nameArray[0]} ${nameArray[1] || ""}`;
  }
  return newName.toLowerCase();
};
