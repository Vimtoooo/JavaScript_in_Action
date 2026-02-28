const doc = document;

function openTab(tabId) {
    doc.querySelectorAll('.tab-content').forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}