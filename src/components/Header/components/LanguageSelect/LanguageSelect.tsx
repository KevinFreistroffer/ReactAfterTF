import React, { useState, useEffect } from 'react';
import { Container } from './LanguageSelect.styled';
import FormControl from '@material-ui/core/FormControl';
import Cookie from 'js-cookie';
import { useTranslation } from 'react-i18next';

export interface ILanguageSelectProps {
  className?: string;
}

export const LanguageSelect = (props: ILanguageSelectProps): JSX.Element => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  useEffect(() => {
    try {
      const langCode =
        Cookie.get('LANG_CODE') || window.localStorage.getItem('LANG_CODE');

      if (langCode) {
        setSelectedLanguage(langCode);
      }
    } catch (error) {
      console.log(
        'An error occurred accessing cookies or localStorage: ',
        error
      );
    }
  }, []);

  const handleOnChange = (event: React.ChangeEvent<{ value: any }>) => {
    const value = event.target.value;

    Cookie.set('LANG_CODE', value);
    if (typeof (Storage !== undefined)) {
      const localStorage = window.localStorage;

      localStorage.setItem('LANG_CODE', value);
    }
    setSelectedLanguage(value);
    window.location.reload();
  };

  return (
    <Container className='full-width '>
      <FormControl className={props.className}>
        <select
          name='select-language'
          id='language-select'
          onChange={handleOnChange}
          value={selectedLanguage}
        >
          <option value='en'>{t('English', 'English')}</option>
          <option value='de'>{t('German', 'German')}</option>
          <option value='es'>{t('Spanish', 'Spanish')}</option>
          <option value='fr'>{t('French', 'French')}</option>
          <option value='zh-CN'>
            {t('Chinese (Simplified)', 'Chinese (Simplified)')}
          </option>
          <option value='zh-TW'>
            {t('Chinese (Traditional)', 'Chinese (Traditional)')}
          </option>
        </select>
      </FormControl>
    </Container>
  );
};

export default LanguageSelect;
