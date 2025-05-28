import React from "react";
import "./Booking.css";
const Booking = () => {
  return (
    <section className="booking">
      <div class="header">
        <h2 className="my"> ← MY BOOKING</h2>

        <div class="taps">
          <div class="tab">Upcoming</div>
          <div class="tab active">History</div>
        </div>
      </div>
      <div class="tabs">
        <div class="tab active">All</div>
        <div class="tab">Home Consultation</div>
        <div class="tab">In-Clinic Consultation</div>
      </div>
      <div class="booking-grid">
        <div class="card">
          <div class="card-header">
            <div>Appointment: 10/10/2010, 09:00PM</div>
            <div class="complete-tag">Complete</div>
          </div>

          <div class="doctor-info">
            <img
              src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
              alt="Dr."
              class="doctor-img"
            />
            <div class="info-text">
              <strong>Dr. Amit</strong>
              <br />
              6+ Years Experience
              <br />
              Booking on: 08/10/2010
            </div>
          </div>

          <div class="card-details">
            <div className="paid">
              <p>
                Paid Amount: <br /> <span className="price">₹399 </span>
              </p>

              <p>
                Consultation Type: <br /> <strong>Home</strong>
              </p>
            </div>

            <div class="tags">
              <p>Disease:</p>
              <span class="tag">worms</span>
              <span class="tag">Ear infection</span>
            </div>
            <p class="note">
              <strong>Additional Note:</strong> <br /> My Dog is neither
              drinking nor eating anything, have swelling
            </p>
          </div>

          <div class="card-footer">
            <span class="li"> ↓ Prescription</span>
            <button class="btn">Book Again</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div>Appointment: 10/10/2010, 09:00PM</div>
            <div class="complete-tag">Complete</div>
          </div>

          <div class="doctor-info">
            <img
              src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
              alt="Dr."
              class="doctor-img"
            />
            <div class="info-text">
              <strong>Dr. Amit</strong>
              <br />
              6+ Years Experience
              <br />
              Booking on: 08/10/2010
            </div>
          </div>

          <div class="card-details">
            <div className="paid">
              <p>
                Paid Amount: <br /> <span className="price">₹399 </span>
              </p>

              <p>
                Consultation Type: <br /> <strong>Home</strong>
              </p>
            </div>

            <div class="tags">
              <p>Disease:</p>
              <span class="tag">worms</span>
              <span class="tag">Ear infection</span>
            </div>
            <p class="note">
              <strong>Additional Note:</strong> <br /> My Dog is neither
              drinking nor eating anything, have swelling
            </p>
          </div>

          <div class="card-footer">
            <span class="li"> ↓ Prescription</span>
            <button class="btn">Book Again</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div>Appointment: 10/10/2010, 09:00PM</div>
            <div class="complete-tag">Complete</div>
          </div>

          <div class="doctor-info">
            <img
              src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
              alt="Dr."
              class="doctor-img"
            />
            <div class="info-text">
              <strong>Dr. Amit</strong>
              <br />
              6+ Years Experience
              <br />
              Booking on: 08/10/2010
            </div>
          </div>

          <div class="card-details">
            <div className="paid">
              <p>
                Paid Amount: <br /> <span className="price">₹399 </span>
              </p>

              <p>
                Consultation Type: <br /> <strong>Home</strong>
              </p>
            </div>

            <div class="tags">
              <p>Disease:</p>
              <span class="tag">worms</span>
              <span class="tag">Ear infection</span>
            </div>
            <p class="note">
              <strong>Additional Note:</strong> <br /> My Dog is neither
              drinking nor eating anything, have swelling
            </p>
          </div>

          <div class="card-footer">
            <span class="li"> ↓ Prescription</span>
            <button class="btn">Book Again</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <div>Appointment: 10/10/2010, 09:00PM</div>
            <div class="complete-tag">Complete</div>
          </div>

          <div class="doctor-info">
            <img
              src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
              alt="Dr."
              class="doctor-img"
            />
            <div class="info-text">
              <strong>Dr. Amit</strong>
              <br />
              6+ Years Experience
              <br />
              Booking on: 08/10/2010
            </div>
          </div>

          <div class="card-details">
            <div className="paid">
              <p>
                Paid Amount: <br /> <span className="price">₹399 </span>
              </p>

              <p>
                Consultation Type: <br /> <strong>Home</strong>
              </p>
            </div>

            <div class="tags">
              <p>Disease:</p>
              <span class="tag">worms</span>
              <span class="tag">Ear infection</span>
            </div>
            <p class="note">
              <strong>Additional Note:</strong> <br /> My Dog is neither
              drinking nor eating anything, have swelling
            </p>
          </div>

          <div class="card-footer">
            <span class="li"> ↓ Prescription</span>
            <button class="btn">Book Again</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
