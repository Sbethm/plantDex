import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NewPlant(props) {
    const [ newPlant, setNewPlant ] = useState({
        nickname: '',
        water: '',
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
        console.log("THIS IS YOUR EVENT", event);
        console.log("THIS IS YOUR NICKNAME", newPlant);

        fetch('/plant', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                nickname: newPlant.nickname,
                water: newPlant.water,
                adoptday: newPlant.adoptday,
                type: newPlant.type            
            })
        }).catch(err => {
            console.log("YOUR POST WAS NOT SUCCESSFUL", err);
        })
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
                                    Dry
                                </option>
                                <option value="Moist">
                                    Moist
                                </option>
                                <option value="Wet">
                                    Wet
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