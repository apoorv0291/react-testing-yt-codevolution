import React from 'react';

export default function Application() {
    return (
        <div>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p> All forms are mandatory</p>
            <img src="ddd" alt="a person with lap" />
            <span title="Close">X</span>
            <div data-testid="testDiv"> TEST DIV</div>
            <form>
                <div>
                    <label htmlFor="name">Namee</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="FullName"
                        value="Vishwash"
                        onChange={() => {}}
                    />
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" name="bio" />
                </div>
                <div>
                    <label htmlFor="job-location">Job location </label>
                    <select id="job-location">
                        <option> Select a country</option>
                        <option value="US"> USA</option>
                        <option value="UK"> UK</option>
                        <option value="IN"> India</option>
                        <option value="AU"> Austria</option>
                        <option value="JP"> Japan</option>
                    </select>
                </div>
                <div>
                    {/* <label htmlFor="terms"> */}
                    <label>
                        <input type="checkbox" id="terms" /> I agree to all t
                        and c
                    </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
