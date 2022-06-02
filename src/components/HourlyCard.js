import React, { useState } from 'react';
import { RiCelsiusLine } from "react-icons/ri";

function HourlyCard () {

    return (
        <div className="hourly-container">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Weather</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>3:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>6:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>9:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>15:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>18:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                    <tr>
                        <td>21:00</td>
                        <td>temp<RiCelsiusLine/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default HourlyCard;