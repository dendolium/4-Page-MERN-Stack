import React, {useState, useEffect} from 'react';
import Nav from "./Nav";
import {useLocation} from 'react-router';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CategoriesPage () {
    const location = useLocation();
    const [areaId, setAreaID] = useState('');
    const [categories, setCategories] = useState([]);
    const [ads, setAds] = useState([]);

    useEffect(() => {
        setAreaID(location.state.item);
        
        async function fetchFunction(){
        
        
        await axios.get('http://localhost:5000/api/categories').then(res => {
            console.log(res.data)
            setCategories(res.data);
        }).catch(err => console.log(err))
        
        await axios.get('http://localhost:5000/api/ads').then(res => {
            console.log(res.data)

            setAds(res.data);
        }).catch(err => console.log(err))
    }

    fetchFunction()

    }, [])
    return(
        <>
        <Nav />
        <div className="container">
            <div className="row pl-3">
                {
                categories.map((item, key) => {
                    console.log(item.areaId);
                    console.log('areaid ' + areaId)
                    return (
                    
                 <>{item.areaId == areaId ? <>
                      <div className="col-md-4">
                            <div className="body-background mt-3 text-center border-radius">
                                <p className="text-color-body">
                                    {
                                    item.name
                                }</p>
                            </div>
                            <div className="row">


                                <div className="col-lg-10  ml-4 ">


                                    <div class="list-group">
                                        {
                                        ads.map(ad => {
                                            return (

                                                <>{
                                                    
                                                    ad.categoryId == item._id ? <>
                                                    <Link to={{
                                                        pathname: "/ad",
                                                        state: {
                                                            item: ad
                                                        }
                                                    }}>
                                                        <input type="checkbox" name="CheckBoxInputName" value="Value4" id="CheckBox4"/>
                                                        <label class="list-group-item" for="CheckBox4">
                                                            {
                                                            ad.name
                                                        }</label>
                                                        </Link>
                                                       


                                                    </> : <></>
                                                }</>
                                            )
                                        })
                                    } </div>

                                </div>
                            </div>

                        </div>


                 </>: <></>}</>
                      
                    );
                })
            } </div>
        </div>


</>
    );
}

export default CategoriesPage;