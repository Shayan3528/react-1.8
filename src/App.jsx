// import getImageUrl from "./component/Avatar";
import Profile from "./component/Profile";


export default function App(){
    return (
      <div>
        <h1>Notable Scientists</h1>
        <Profile
          imageId="szV5sdG"
          name="Maria Skłodowska-Curie"
          profession="physicist and chemist"
          discovery="polonium (chemical element)"
          awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
          ]}
        />
        <Profile
          imageId='YfeOqp2'
          name='Katsuko Saruhashi'
          profession='geochemist'
          discovery="a method for measuring carbon dioxide in seawater"
          awards={[
            'Miyake Prize for geochemistry',
            'Tanaka Prize'
          ]}
        />
      </div>
    );
  }
