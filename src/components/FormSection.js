import React from "react";

export default function FormSection() {
    return (
        <div>
            <fieldset>
                <legend>Personal Details</legend>
                <form action="">
                    <label htmlFor="name" required>Name: &nbsp;</label>
                    <input type="text" id="name" required /><br />
                    <label htmlFor="gender">Gender: &nbsp;</label>
                    <input type="radio" name="gender" value="male" /> Male&nbsp;
                    <input type="radio" name="gender" value="female" /> Female&nbsp;<br />
                    <label htmlFor="age">Age: &nbsp;</label>
                    <input type="number" name="age" id="age" />
                    <br />
                    <label htmlFor="mobile">Mobile: &nbsp;</label>
                    <input type="number" name="amobilege" id="mobile" />
                    <br />
                    <label htmlFor="id-name" required>Id Name: &nbsp;</label>
                    <input type="text" id="id-name" /><br />
                    <label htmlFor="id-no" required>Id Number: &nbsp;</label>
                    <input type="text" id="id-no" /><br />
                    <label htmlFor="noOfPerson" required>Number Of Persons: &nbsp;</label>
                    <input type="number" id="noOfPerson" /><br />
                    <label htmlFor="email">Email Address:&nbsp;</label>
                    <input type="email" name="email" id="email" data-validate="email" /><br />
                    <button type="submit">Submit</button>
                </form>

            </fieldset>
        </div>
    );
}
/*
name gender age mob id name, id no, no of person*/