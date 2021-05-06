import * as React from 'react';
import { StyledHeader } from './Header.styled';
import Title from './components/Title';
import MenuToggler from './components/MenuToggler';
import Navigation from './components/Navigation';
import { NavigationLink } from './components/Navigation/Navigation.styled';
import { useTranslation } from 'react-i18next';
import Cookie from 'js-cookie';

export interface DefaultRootState {
  key: string;
}

export interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en');

  React.useEffect(() => {
    const langCode = Cookie.get('LANG_CODE');
    if (langCode) {
      setSelectedLanguage(langCode);
    }
  }, []);

  const handleOnChange = (event: any) => {
    console.log(event.target.value);
    Cookie.set('LANG_CODE', event.target.value);
    setSelectedLanguage(event.target.value);
    window.location.reload();
  };

  const { t } = useTranslation();
  return (
    <StyledHeader>
      <div className='full-width flex-row justify-content-space-between align-items-center'>
        <Title />
        {/* 320 - 767px menu toggler */}
        <MenuToggler />
        {/* 768px+ navigation menu */}
        <Navigation>
          <NavigationLink to='/' className='mr-l1'>
            {t('page_title.Home', 'Home')}
          </NavigationLink>
          <NavigationLink to='/sign-in'>
            {t('page_title.Sign In', 'Sign In')}
          </NavigationLink>
        </Navigation>
      </div>
      <div className='full-width flex-row justify-content-flex-end'>
        <select
          name='select-language'
          id='language-select'
          onChange={handleOnChange}
          value={selectedLanguage}
          defaultValue='en'
          onSelect={handleOnChange}
        >
          <option value='en'>English</option>
          <option value='de'>German</option>
          <option value='es'>Spanish</option>
          <option value='fr'>French</option>
          <option value='zh-cn'>Chinese (Simplified)</option>
          <option value='zh-tw'>Chinese (Traditional)</option>
        </select>
      </div>
    </StyledHeader>
  );
};

export default Header;
