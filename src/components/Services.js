import React from "react";
import Title from "./Title.js";
import { services } from "../data.js";

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title='our' subtitle='sercives' />
            <div className="section-center services-center">
                {services.map(({ id, title, icon, text }) => {
                    return (
                        <article key={id} className="service">
                            <span className="service-icon"><i className={icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{title}</h4>
                                <p className="service-text">
                                    {text}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
export default Services;