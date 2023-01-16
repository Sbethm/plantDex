import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NewPlant(props) {
    const [ newPlant, setNewPlant ] = useState({
        nickname: '',
        water: 'dry',
        adoptday: '',
        type: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewPlant((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const emptyInput = Object.values(newPlant).indexOf('');
        console.log(emptyInput)

        if(emptyInput === -1) {
            fetch('/plant', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                nickname: newPlant.nickname,
                water: newPlant.water,
                adoptday: newPlant.adoptday,
                type: newPlant.type            
                })
            })
            .catch(err => { 
                console.log("YOUR POST WAS NOT SUCCESSFUL", err);
            })
            //close the NewPlantModal after successful POST request
            props.setShowModal();
        } else {
            window.alert("Please fill in every box.")
        }

        

        
    }

    return (
        <div className='plant--modal'>
            <button className='closeModal--btn primary--btn' onClick={ props.setShowModal }>X</button>
            <form action="" onSubmit={ onSubmit } className='modal--container'>
                <div className='plantCard--header'>
                    <div className='nickname-water--input'>
                        <label>
                            Nickname:
                            <input 
                              type='text'
                              placeholder='Prickly Pete' 
                              name='nickname'
                              value={newPlant.nickname}
                              onChange={handleChange}
                            />
                        </label>
                        <label> 
                            How much water does it drink?
                            <select 
                              name="water" 
                              value={newPlant.water}
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
                              value={newPlant.adoptday}
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
                          value={newPlant.type}
                          onChange={handleChange}
                        />
                    </label>
                    
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}