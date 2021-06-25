function Sidebar() {
    return (
        <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                    <li className="sidebar-search">
                        <div className="input-group custom-search-form">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </li>
                    <li>
                        <a className="active" href="/"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-sitemap fa-fw"></i> الأكواد الرئيسية<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="#">الإدارة العليا<span className="fa arrow"></span></a>
                                <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#">رئيس مجلس الإدارة والعضو المنتدب</a>
                                    </li>
                                    <li>
                                        <a href="/assisstantchairman">مساعد رئيس الشركة</a>
                                    </li>
                                    <li>
                                        <a href="/generalmanager">مدير عام</a>
                                    </li>
                                    <li>
                                        <a href="#">مدير عام مساعد</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">المستوى الأول<span className="fa arrow"></span></a>
                                <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#">مدير إدارة</a>
                                    </li>
                                    <li>
                                        <a href="#">رئيس قسم</a>
                                    </li>
                                    <li>
                                        <a href="#">أخصائي</a>
                                    </li>
                                    <li>
                                        <a href="#"> أخصائي أول</a>
                                    </li>
                                    <li>
                                        <a href="#"> أخصائي ممتاز</a>
                                    </li>
                                    <li>
                                        <a href="#">محاسب</a>
                                    </li>
                                    <li>
                                        <a href="#"> محاسب ممتاز</a>
                                    </li>
                                    <li>
                                        <a href="#">محام</a>
                                    </li>
                                    <li>
                                        <a href="#">محام ممتاز</a>
                                    </li>
                                    <li>
                                        <a href="#">مهندس</a>
                                    </li>
                                    <li>
                                        <a href="#">مهندس ممتاز</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">المستوى الثاني<span className="fa arrow"></span></a>
                                <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#"></a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">المستوى الثالث<span className="fa arrow"></span></a>
                                <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i>الأكواد الرئيسية<span className="fa arrow"></span></a>
                        <ul className="nav nav-first-level">
                            <li>
                                <a href="flot.html">الإدارات</a>
                            </li>
                            <li>
                                <a href="morris.html">مساعد رئيس الشركة</a>
                            </li>
                            <li>
                                <a href="morris.html">مدير عام</a>
                            </li>
                            <li>
                                <a href="morris.html">مدير عام مساعد</a>
                            </li>
                            <li>
                                <a href="morris.html">مدير إدارة</a>
                            </li>
                            <li>
                                <a href="morris.html">رئيس قسم</a>
                            </li>
                        </ul>

                    </li>
                    <li>
                        <a href="/table"><i className="fa fa-table fa-fw"></i> Tables</a>
                    </li>
                    <li>
                        <a href="/form"><i className="fa fa-edit fa-fw"></i> Forms</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="panels-wells.html">Panels and Wells</a>
                            </li>
                            <li>
                                <a href="buttons.html">Buttons</a>
                            </li>
                            <li>
                                <a href="notifications.html">Notifications</a>
                            </li>
                            <li>
                                <a href="typography.html">Typography</a>
                            </li>
                            <li>
                                <a href="grid.html">Grid</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="blank.html">Blank Page</a>
                            </li>
                            <li>
                                <a href="login.html">Login Page</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;