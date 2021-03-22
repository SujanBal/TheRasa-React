import React from 'react'
import About from './About';
import Blend from './Blend';
import Culinary from './Culinary';
import Hero from "./Hero";
import Menu from './Menu';
import Navbar from "./Navbar";
import Recipes from './Recipes';

export default function index() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Recipes />
            <Menu />
            <Blend />
            <Culinary />
        </>
    )
}
