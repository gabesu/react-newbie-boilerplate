import React from 'react';



const List = (props) => (
        <div>
            {props.listItems.map(item =>
                {
                    return(
                        <p key={item}>{item}</p>
                    )
                }
            )}
        </div>
    )


export default List;