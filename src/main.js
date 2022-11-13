import Toolbar from './toolbar'
import EmailContent from './emailContent';
const MainCont= () => {
  
    return ( 
      <main className="email-view">
        <Toolbar />
        <EmailContent />
      </main>
     );
}
 
export default MainCont;