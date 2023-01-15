import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UpdateForm(props) {
    //insert current info as mutatable values in the form
    //user will be able to update info
    //if user selects finish button:
        // 1. Update fetch request is sent
        // 2. modal is closed
        // 3. Main page is updated

    return (
        <>
            <form 
              action="" 
              className='modal--container'
            //   onSubmit={ onSubmit }
            >
                <div className='plantCard--header'>
                    <div className='nickname-water--input'>
                        <label>
                            Nickname:
                            <input 
                            type='text'
                            placeholder='Prickly Pete' 
                            name='nickname'
                            // value={newPlant.nickname}
                            // onChange={handleChange}
                            />
                        </label>
                        <label> 
                            How much water does it drink?
                            <select 
                            name="water" 
                            // value={newPlant.water}
                            // onChange={handleChange}
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
                            // value={newPlant.adoptday}
                            // onChange={handleChange}
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
                        // value={newPlant.type}
                        // onChange={handleChange}
                        />
                    </label>
                    
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}