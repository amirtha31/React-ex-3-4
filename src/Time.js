import React from 'react'
var DateTime = () => {
    var showdate=new Date();
    var displaydate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dd=showdate.toDateString();
    var time=showdate.getHours()+'/'+showdate.getMinutes()+'/'+showdate.getSeconds();

    return ( 
        <>
        <div className='in'>
            <label>DATE</label>
            <input type= "text" value={displaydate} />
            <p>Date:{dd}</p>
            <p>Time:{time}</p>
        </div>
        </>

     );
}
 
export default DateTime ;