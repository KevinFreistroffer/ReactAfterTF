import React, { useState, useEffect } from 'react';
import { Select, Option } from '../../../../styled/Select.styled';
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
        setSelectedLanguage(langCode.toLowerCase());
      }
    } catch (error) {}
  }, []);

  const handleOnChange = (event: any) => {
    Cookie.set('LANG_CODE', event.target.value);
    if (typeof (Storage !== undefined)) {
      const localStorage = window.localStorage;

      localStorage.setItem('LANG_CODE', event.target.value);
    }
    setSelectedLanguage(event.target.value);
    window.location.reload();
  };

  return (
    <Container className='full-width '>
      <FormControl className={props.className}>
        <Select
          name='select-language'
          id='language-select'
          onChange={handleOnChange}
          value={selectedLanguage}
          defaultValue='en'
          onSelect={handleOnChange}
        >
          <Option value='en'>{t('English', 'English')}</Option>
          <Option value='de'>{t('German', 'German')}</Option>
          <Option value='es'>{t('Spanish', 'Spanish')}</Option>
          <Option value='fr'>{t('French', 'French')}</Option>
          <Option value='zh-cn'>
            {t('Chinese (Simplified)', 'Chinese (Simplified)')}
          </Option>
          <Option value='zh-tw'>
            {t('Chinese (Traditional)', 'Chinese (Traditional)')}
          </Option>
        </Select>
      </FormControl>
    </Container>
  );
};

export default LanguageSelect;
