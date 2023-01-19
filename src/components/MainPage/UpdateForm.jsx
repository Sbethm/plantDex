import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UpdateForm(props) {
    const { plantInfo } = props;
    //insert current info as mutatable values in the form
    //user will be able to update info
    //if user selects finish button:
        // 1. Update fetch request is sent
        // 2. modal is closed
        // 3. Main page is updated
        /*
        db.collection.findAndModify({
            query: { nickname },
            update: { updatedPlantObj}, // Changed in MongoDB 4.2
            new: true,
        });
        */
        
        const onSubmit = (event) => {
            event.preventDefault();
            
            const emptyInput = Object.values(newPlant).indexOf('');
            console.log(emptyInput)
            //check to make sure all inputs have been filled
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
                //rerender the GardenContainer component with new plant added
                props.setPlants([
                    ...props.plants,
                    newPlant
                ])
                //close the NewPlantModal after successful POST request
                props.setShowModal();
            } else {
                window.alert("Please fill in every box.")
            }

        }

    

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
                            // value={plantInfo.nickname}
                            defaultValue={plantInfo.nickname}
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
                <input className='primary--btn submit' type="submit" value="Submit" />
            </form>
        </>
    )
}