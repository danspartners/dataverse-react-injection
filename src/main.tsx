import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelpApp from './HelpApp.tsx'
import DashboardApp from './DashboardApp.tsx'

// Help app can simply be rendered into a fixed element
createRoot(document.getElementById('react-help')!).render(
  <StrictMode>
    <HelpApp />
  </StrictMode>,
)

// Inject the dashboard app next to the advanced search link
const dashboardTargetElement = document.querySelector('[id*="advsearchlink"]');

if (dashboardTargetElement) {
  const reactContainer = document.createElement('span');
  reactContainer.id = 'react-dashboard';
  // add some Bootstrap (v3!) classes
  reactContainer.className = 'margin-right'

  // Insert the container next to the target element
  dashboardTargetElement.parentNode?.insertBefore(reactContainer, dashboardTargetElement);

  // Render the React app into the container
  const root = createRoot(reactContainer);
  root.render(
    <StrictMode>
      <DashboardApp />
    </StrictMode>
  );
} else {
  console.error('Target element not found!');
}