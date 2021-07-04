import React, { useState } from 'react';
import '../TabMenu/Tab.css';
import Menu from '../TabMenu/Menu';

const GalleryReact = () =>{

    const [items, setItems] = useState(Menu);

    const filterItem = (categItem) =>{
        const updatedItems = Menu.filter( (curElem) => {
            return curElem.category === categItem;
        })

        setItems(updatedItems);
    }

    return(
        <>
            <h1 className='mt-5 text-center main-heading'> Order Your Favourite Dish </h1>
            <hr />
            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-between'>
                    <button className='btn btn-warning' onClick={() => filterItem('breakfast')}> Breakfast </button>
                    <button className='btn btn-warning' onClick={() => filterItem('lunch')}> Lunch </button>
                    <button className='btn btn-warning' onClick={() => filterItem('evening')}> Evening </button>
                    <button className='btn btn-warning' onClick={() => filterItem('dinner')}> Dinner </button>
                    <button className='btn btn-warning' onClick={() => setItems(Menu)}> All </button>
                </div>
            </div>

            {/* my main item section */}
            <div className='menu-items container-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row my-5'>

                        {
                            items.map( (elem) =>{
                                const {id, name, image, description, price} = elem;

                                return(
                                <div className="card mx-5 my-3" style={{width: '400px' }}>
                                    <img className="card-img-top img-fluid" src={image} alt="Card image"/>
                                    <div className="card-body">
                                        <div className="card-title main-title"> 
                                            <h1> {name} </h1>
                                        </div>
                                        <p className="card-text"> {description} </p>
                                        <div className='d-flex justify-content-between'> 
                                            <p className='price'> Price : {price} </p>
                                            <a href="">
                                                <button className="btn btn-primary"> Order Now </button>
                                            </a>
                                        </div>
                                        <p className='mt-3'> *Prices may vary on selected date. </p>
                                    </div>
                                </div>
                                )
                            })
                        }

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryReact;