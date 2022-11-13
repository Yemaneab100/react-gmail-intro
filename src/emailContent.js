
import Title from './title'
import ContentHeader from './contentHeader';
import EmailBody from './emailBody';
import EmailAction from './emailAction';

const EmailContent = () => {
    return ( 
        <article className="email-content">
          <Title />
          <ContentHeader />
          <EmailBody />
          <EmailAction />
        </article>
     );
}
 
export default EmailContent;