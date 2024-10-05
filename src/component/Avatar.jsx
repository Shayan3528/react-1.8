export default function Avatar({person,age,size} ){ /* object destructuring here  */
    
    return (
        <div>
            <div>
                <h1>{person}</h1>
                <h1>Age is: {age}</h1>
                <h2>Size is: {size}</h2>
                
            </div>
        </div>
    );
}