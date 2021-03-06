import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
function Sidebar() {
    return (
        <div className="sidebar">
            <ul className="sidebar_generic">
                <li><span><FaInbox /></span><span>Inbox</span></li>
                <li><span><FaRegCalendar /></span><span>Today</span></li>
                <li> <span><FaRegCalendarAlt /></span><span>Next Week</span></li>
            </ul>
            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar__projects">Projects Will be here</ul>
        </div>
    )
}

export default Sidebar
