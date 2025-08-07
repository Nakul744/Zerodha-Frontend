import React from "react";
import AccordionItem from '../AccordionItem'; // Assuming AccordionItem.jsx is in the same directory

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Left Column for Accordions */}
        <div className="col-lg-8 col-md-12"> {/* Made responsive */}
          {/* Main Accordion Wrapper */}
          <div className="accordion" id="mainAccordion">
            <AccordionItem
              id="One"
              headerText="Account Opening"
              iconClass="fa-solid fa-plus"
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Resident individual
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Minor
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Non Resident Indian (NRI)
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Company, Partnership, HUF and LLP
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    Glossary
                  </a>
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="Two"
              headerText="Funds"
              iconClass="fa-solid fa-money-bill-transfer" // Changed icon for variety
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Add Funds
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Withdraw Funds
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Fund Statement
                  </a>
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="Three"
              headerText="Account Management"
              iconClass="fa-solid fa-user-gear" // Changed icon for variety
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Update Profile
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Change Password
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Demat Account Services
                  </a>
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="Four"
              headerText="Support & Queries"
              iconClass="fa-solid fa-circle-question" // Changed icon for variety
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    General Queries
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Technical Support
                  </a>
                  </li>
                  <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Complaints
                  </a>
                </li>
              </ul>
            </AccordionItem>

            <AccordionItem
              id="Five"
              headerText="Trading"
              iconClass="fa-solid fa-chart-line" // Changed icon for variety
            >
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Equity Trading
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Futures & Options
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="text-decoration-none">
                    Commodities
                  </a>
                </li>
              </ul>
            </AccordionItem>
          </div>
        </div>

        {/* Right Column (content from your image) */}
        <div className="col-lg-4 col-md-12 mt-md-4 mt-lg-0">
            <div class="p-3 mb-4" style={{borderLeft: '4px solid #FFDDC1', backgroundColor: '#FFF8F0'}}>
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <a href="/" class="text-decoration-none">
                            Exclusion of F&O contracts on 8 securities from August 29, 2025
                        </a>
                    </li>
                    <li>
                        <a href="/" class="text-decoration-none">
                            Revision in expiry day of Index and Stock derivatives contracts
                        </a>
                    </li>
                </ul>
            </div>

            <div class="border">
                <div class="p-3 border-bottom">
                    <h6>Quick links</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="/" class="text-decoration-none">1. Track account opening</a>
                    </li>
                    <li class="list-group-item">
                        <a href="/" class="text-decoration-none">2. Track segment activation</a>
                    </li>
                    <li class="list-group-item">
                        <a href="/" class="text-decoration-none">3. Intraday margins</a>
                    </li>
                    <li class="list-group-item">
                        <a href="/" class="text-decoration-none">4. Kite user manual</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;