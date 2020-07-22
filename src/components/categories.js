import React, { Component } from "react";

import Developer from "../assets/categories/developer.png";
import Designer from "../assets/categories/designer.png";
import Excel from "../assets/categories/excel.png";
import Games from "../assets/categories/games.png";
import Arduino from "../assets/categories/arduino.png";

class Categories extends Component {
    render() {
        return (
            <div className="categories"> 
                <div className="categories-section">
                    <h1>Principais categorias</h1>
                    <section>
                        <div className="item">
                            <div className="categories-image">
                                <img src={Developer} alt="Developer" />
                            </div>
                            <div className="categories-info">
                                <div className="categories-info-wrap">
                                    <h2 className="categories-title">Desenvolvedor Web</h2>
                                </div>
                            </div>
                        </div>
                          
                        <div className="item">
                            <div className="categories-image">
                                <img src={Designer} alt="Developer" />
                            </div>
                            <div className="categories-info">
                                <div className="categories-info-wrap">
                                    <h2 className="categories-title">Designer</h2>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="categories-image">
                                <img src={Excel} alt="Developer" />
                            </div>
                            <div className="categories-info">
                                <div className="categories-info-wrap">
                                    <h2 className="categories-title">Excel</h2>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="categories-image">
                                <img src={Games} alt="Developer" />
                            </div>
                            <div className="categories-info">
                                <div className="categories-info-wrap">
                                    <h2 className="categories-title">Desenvolvedor de Games</h2>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="categories-image">
                                <img src={Arduino} alt="Developer" />
                            </div>
                            <div className="categories-info">
                                <div className="categories-info-wrap">
                                    <h2 className="categories-title">Arduino</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Categories;