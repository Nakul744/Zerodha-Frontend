import React from 'react';

function AccordionItem({ id, headerText, iconClass, children }) {
  // Generate unique IDs for header and collapse
  const headingId = `heading${id}`;
  const collapseId = `collapse${id}`;

  return (
    <div className="accordion-item mb-5">
      <h2 className="accordion-header" id={headingId}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
        >
          <span className="me-2">
            <i className={iconClass}></i>
          </span>
          {headerText}
        </button>
      </h2>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        aria-labelledby={headingId}
        data-bs-parent="#mainAccordion" // Use a common parent ID if you want only one open at a time
        // If you want each accordion to be completely independent, remove data-bs-parent
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;