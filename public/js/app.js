async function loadAccounts() {
  const tbody = document.getElementById('accountRows');
  const statTotal = document.getElementById('statTotal');
  const statActive = document.getElementById('statActive');

  tbody.innerHTML = '<tr><td colspan="4" class="loading">Loading accounts…</td></tr>';

  try {
    const res = await fetch('/accounts');
    if (!res.ok) throw new Error('API error ' + res.status);
    const { data } = await res.json();

    statTotal.textContent = data.length;
    statActive.textContent = data.filter((a) => a.status === 'active').length;

    tbody.innerHTML = data
      .map(
        (a) => `
      <tr>
        <td><strong>${escapeHtml(a.id)}</strong></td>
        <td>${escapeHtml(a.name)}</td>
        <td>${escapeHtml(a.industry)}</td>
        <td><span class="status-pill ${a.status}">${escapeHtml(a.status)}</span></td>
      </tr>`
      )
      .join('');
  } catch {
    tbody.innerHTML =
      '<tr><td colspan="4" class="error-msg">Could not load API. Run start-api.command first.</td></tr>';
    statTotal.textContent = '—';
    statActive.textContent = '—';
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.getElementById('refreshBtn').addEventListener('click', loadAccounts);
loadAccounts();
