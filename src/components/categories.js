import React, { Component } from "react";

import Developer from "../assets/categories/developer.png"

class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <div className="categories-section">
                    <section>
                    <div className="item">
                        <div className="categories-image">
                            <img src={Developer} alt="Developer" />
                        </div>
                        <div className="categories-image">
                            <img src={Developer} alt="Developer" />
                        </div>
                        <div className="categories-image">
                            <img src={Developer} alt="Developer" />
                        </div>
                        <div className="categories-image">
                            <img src={Developer} alt="Developer" />
                        </div>
                        <div className="categories-image">
                            <img src={Developer} alt="Developer" />
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Categories;