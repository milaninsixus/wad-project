/**
 * KrushiMitra — Filtering and Sorting Engine
 * Handles dynamic client-side filtering by category, season, medicine class, and search keywords.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCatalogFilters();
  initSeasonalTabs();
});

// 1. Generic Filter Engine for Cards (Crops, Diseases, Medicines, Schemes, Articles)
function initCatalogFilters() {
  const filterContainers = document.querySelectorAll('.filter-bar-container');

  filterContainers.forEach(container => {
    const filterButtons = container.querySelectorAll('.filter-btn');
    const searchInput = container.querySelector('.filter-search-box input');
    const targetGridId = container.getAttribute('data-target-grid');
    const targetGrid = targetGridId ? document.getElementById(targetGridId) : document.querySelector('.filterable-grid');

    if (!targetGrid) return;

    const cards = targetGrid.querySelectorAll('.filterable-card');

    let currentCategory = 'all';
    let currentSearchTerm = '';

    const applyFilters = () => {
      let visibleCount = 0;

      cards.forEach(card => {
        const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
        const cardSeason = (card.getAttribute('data-season') || '').toLowerCase();
        const cardText = (card.textContent || '').toLowerCase();

        const matchesCategory = currentCategory === 'all' || 
                                cardCategory.includes(currentCategory) || 
                                cardSeason.includes(currentCategory);

        const matchesSearch = currentSearchTerm === '' || cardText.includes(currentSearchTerm);

        if (matchesCategory && matchesSearch) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show/hide empty state
      let emptyMsg = targetGrid.querySelector('.filter-empty-message');
      if (visibleCount === 0) {
        if (!emptyMsg) {
          emptyMsg = document.createElement('div');
          emptyMsg.className = 'filter-empty-message callout-box callout-info';
          emptyMsg.style.gridColumn = '1 / -1';
          emptyMsg.style.textAlign = 'center';
          emptyMsg.innerHTML = `
            <div>
              <h4 style="font-size: 1.1rem; color: var(--color-forest); margin-bottom: 6px;">No matching agricultural records found</h4>
              <p style="font-size: 0.9rem; color: var(--color-text-muted);">Try selecting "All" or adjusting your search term.</p>
            </div>
          `;
          targetGrid.appendChild(emptyMsg);
        }
        emptyMsg.style.display = 'block';
      } else if (emptyMsg) {
        emptyMsg.style.display = 'none';
      }
    };

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = (btn.getAttribute('data-filter') || 'all').toLowerCase();
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }
  });
}

// 2. Seasonal Calendar Tab Switcher (Used on homepage & seasonal guides)
function initSeasonalTabs() {
  const tabGroup = document.querySelector('.seasonal-tabs-group');
  if (!tabGroup) return;

  const tabs = tabGroup.querySelectorAll('.seasonal-tab-btn');
  const panels = document.querySelectorAll('.seasonal-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const season = tab.getAttribute('data-season');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(panel => {
        if (panel.getAttribute('data-season') === season) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });
}
