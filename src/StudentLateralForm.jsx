import { useState } from "react";
import './StudentLateralForm.css'

const StudentLateralForm = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Student Lateral Form</div>
                <div className="underline"></div>
            </div>

            <form className="inputs">
                <label>
                    Student Name:
                    <input type="text" name="StudentName" />
                </label>
                
                <label>
                    Date of Birth:
                    <input type="date" name="DateofBirth" />
                </label>

                <label>
                    Gender:
                    <input type="text" name="Gender" />
                </label>

                <label>
                    Address:
                    <input type="text" name="Address" />
                </label>

                <label>
                    Email:
                    <input type="email" name="Email" />
                </label>
                
                <label>
                    Phone Number:
                    <input type="text" name="PhoneNumber" />
                </label>
                
                <label>
                    Current School/Collage:
                    <input type="text" name="CurrentSchool/Collage" />
                </label>
                
                <label>
                    Grades:
                    <input type="text" Grades="Grades" />
                </label><br></br>

                <button type="submit">Submit</button>
                
            </form>
        </div>
    );
}

export default StudentLateralForm;