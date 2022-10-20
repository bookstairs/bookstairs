import { useEffect } from 'react';

import { Button, Menu, Tooltip } from '@mantine/core';
import { IconChevronDown, IconLanguage } from '@tabler/icons';
import { getCookie, setCookie } from 'cookies-next';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { useStyles } from '@/components/Layout/Header/Header.styles';
import { selectedLanguage, defaultExpiredTime } from '@/constants/cookies';

// We have to hard code the supported languages because of the limit of next-translate.
const languageNames: Record<string, string> = {
  'en-US': 'U.S. English',
  'ja-JP': '日本語',
  'zh-CN': '大陆简体',
  'zh-HK': '港澳繁體',
  'zh-TW': '臺灣正體',
};

export const LanguageSwitch = () => {
  // Dynamical reset the language by the saved cookie.
  const { locale, locales, defaultLocale } = useRouter();
  const cookieLocale = getCookie(selectedLanguage) || locale || defaultLocale;
  useEffect(() => {
    const redirect = async (lng: string) => {
      await setLanguage(lng);
    };
    if (cookieLocale !== locale) {
      redirect(cookieLocale as string).then();
    }
  }, [locale, cookieLocale]);

  const { t } = useTranslation('common');
  const changeLanguage = async (lng: string) => {
    setCookie(selectedLanguage, lng, { maxAge: defaultExpiredTime });
    await setLanguage(lng);
  };
  const { classes } = useStyles();

  return (
    <Menu position="bottom-end">
      <Tooltip label={t('tooltips.switchLanguage')} openDelay={500}>
        <span>
          <Menu.Target>
            <Button
              variant="filled"
              aria-label={t('tooltips.switchLanguage')}
              className={classes.button}
              sx={{
                width: 66,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconLanguage size={20} stroke={2} />
              <IconChevronDown size={15} />
            </Button>
          </Menu.Target>
        </span>
      </Tooltip>

      <Menu.Dropdown>
        <Menu.Label>{t('language')}</Menu.Label>
        {locales &&
          locales.map((lng) => (
            <Menu.Item key={lng} onClick={() => changeLanguage(lng)} disabled={lng === locale}>
              {languageNames[lng]}
            </Menu.Item>
          ))}
      </Menu.Dropdown>
    </Menu>
  );
};
