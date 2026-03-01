function togglePanel(tabId) {
  const elem = document.getElementById(tabId);
  if (elem.style.display === "block") elem.style.display = "none";
  else elem.style.display = "block";
}