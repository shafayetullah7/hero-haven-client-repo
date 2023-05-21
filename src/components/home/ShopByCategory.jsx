import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToys from './CategoryToys';

const ShopByCategory = () => {
    const [current,setCurrent] = useState(0);
    const [toys,setToys] = useState([]);

    const [options] = useState([
        { value: 'marvel', label: 'Marvel' },
        { value: 'dc', label: 'DC' },
        { value: 'star-wars', label: 'Star-Wars' },
      ]);

    useEffect(()=>{
        setCurrent(0);
    },[])
    useEffect(()=>{
        fetch(`https://hero-haven-server.vercel.app/all-toys?categoryLabel=${options[current].label}`)
        .then(res=>res.json())
        .then(data =>setToys(data));
    },[current,options]);
    

    const handleClick = index =>{
        console.log('index: ',index);
        setCurrent(index);
    }

    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Our Heroes From <span className='text-ruby-500 text-6xl'>Different Universes</span></h1>
            <p className="text-gray-600 text-center md:w-[70%] text-sm mt-3 mx-auto">Explore a wide range of action figures featuring heroes from different universes, including Marvel, DC, and more. Find your favorite characters and collect their action figures today!</p>
            <div className='mt-10'>
                <Tabs onSelect={(i)=>handleClick(i)}>
                    <TabList>
                    <Tab><p className='sm:w-32 w-20 text-center font-bold text-charcoal'>Marvel</p></Tab>
                    <Tab><p className='sm:w-32 w-20 text-center font-bold text-charcoal'>DC</p></Tab>
                    <Tab><p className='sm:w-32 w-20 text-center font-bold text-charcoal'>Star Wars</p></Tab>
                    </TabList>

                    <TabPanel>
                        {current===0 && <CategoryToys category={options[current].label} toys={toys}></CategoryToys>}
                    </TabPanel>
                    <TabPanel>
                        {current===1 && <CategoryToys category={options[current].label} toys={toys}></CategoryToys>}
                    </TabPanel>
                    <TabPanel>
                        {current===2 && <CategoryToys category={options[current].label} toys={toys}></CategoryToys>}
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;