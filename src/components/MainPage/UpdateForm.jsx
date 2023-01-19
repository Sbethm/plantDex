import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UpdateForm(props) {
    const { plantInfo } = props;
    const setPlants = props.setPlants;
    const plants = props.plants;
    const closeModal = props.closeModal;
    const [ updatePlant, setUpdatePlant ] = useState({
        prename: plantInfo.nickname,
        nickname: plantInfo.nickname,
        water: plantInfo.water,
        adoptday: plantInfo.adoptday,
        type: plantInfo.type
    });

        const handleChange = (event) => {
            const { name, value } = event.target;
            setUpdatePlant((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
        
        const onSubmit = (event) => {
            event.preventDefault();
            
            const emptyInput = Object.values(updatePlant).indexOf('');
            console.log(emptyInput)

            //check to make sure all inputs have been filled
                fetch('/plant', {
                method: 'put',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(updatePlant)
                })
                .then((data) => data.json())
                .then(updated => {
                    const updatedState = plants.filter(plant => plant.nickname !== updatePlant.prename);
                    //find current plant object and remove from state
                    //add updated plant object to state
                    //rerender the GardenContainer component with new plant added
                    setPlants([
                    ...updatedState,
                    updatePlant
                    ])
                })
                .catch(err => { 
                    console.log("YOUR UPDATE WAS NOT SUCCESSFUL", err);
                })
                //close the UpdatePlanttModal after successful UPDATE request
                closeModal();
        }

    

    return (
        <>
            <form 
              action="" 
              className='modal--container'
              onSubmit={ onSubmit }
            >
                <div className='plantCard--header'>
                    <div className='nickname-water--input'>
                        <label>
                            Nickname:
                            <input 
                            type='text'
                            name='nickname'
                            defaultValue={plantInfo.nickname}
                            onChange={handleChange}
                            />
                        </label>
                        <label> 
                            How much water does it drink?
                            <select 
                            name="water" 
                            defaultValue={plantInfo.water}
                            onChange={handleChange}
                            id="water-values"
                            >
                                <option value="dry">
                                    dry
                                </option>
                                <option value="moist">
                                    moist
                                </option>
                                <option value="wet">
                                    wet
                                </option>
                            </select>
                        </label>
                        <label>
                            "Got It" Day:
                            <input 
                            type="date"  
                            name="adoptday" 
                            defaultValue={plantInfo.adoptday}
                            onChange={handleChange}
                            />
                        </label>
                    </div>
                    <p className='plant--detail'>{  }</p>
                </div>
                <div className='plantCard--details'>          
                    <FontAwesomeIcon className='plantCard--image' icon="seedling" />
                    <label>
                        Type:
                        <input 
                        type="text" 
                        placeholder='cactus' 
                        name='type'
                        defaultValue={plantInfo.type}
                        onChange={handleChange}
                        />
                    </label>
                    
                </div>
                <input className='primary--btn submit' type="submit" value="Submit" />
            </form>
        </>
    )
}