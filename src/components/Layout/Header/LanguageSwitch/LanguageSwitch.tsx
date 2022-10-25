import { useEffect, useState } from 'react';

import { Button, Menu, Tooltip } from '@mantine/core';
import { IconChevronDown, IconChevronUp, IconLanguage } from '@tabler/icons';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { useStyles } from '@/components/Layout/Header/Header.styles';
import { selectedLanguage, defaultExpiredTime } from '@/constants/cookies';
import { localeNames } from '@/constants/locales';
import { useCookie } from '@/utils/cookies';

const cookie = useCookie<string>(selectedLanguage);

export const LanguageSwitch = () => {
  // Dynamical reset the language by the saved cookie.
  const { locale, locales } = useRouter();
  const cookieLocale = cookie.get(locale || 'en');
  useEffect(() => {
    const redirect = async (lng: string) => {
      await setLanguage(lng);
    };
    if (cookieLocale !== locale) {
      redirect(cookieLocale).then();
    }
  }, [locale, cookieLocale]);

  // State for changing the display arrow icon.
  const [open, setOpen] = useState(false);
  const [showTips, setShowTips] = useState(true);

  // Translate the languages.
  const { t } = useTranslation('common');
  const changeLanguage = async (lng: string) => {
    cookie.set(lng, { maxAge: defaultExpiredTime });
    await setLanguage(lng);
  };
  const { classes, cx } = useStyles();

  return (
    <Menu
      position="bottom-end"
      withArrow
      onChange={(opened: boolean) => setOpen(opened)}
      onOpen={() => setShowTips(false)}
      onClose={() => setShowTips(true)}
    >
      <Tooltip label={t('tooltips.switchLanguage')} openDelay={200} disabled={!showTips}>
        <span>
          <Menu.Target>
            <Button
              variant="filled"
              aria-label={t('tooltips.switchLanguage')}
              className={cx(classes.button, classes.menu)}
            >
              <IconLanguage size={20} stroke={2} />
              {open ? <IconChevronUp size={15} /> : <IconChevronDown size={15} />}
            </Button>
          </Menu.Target>
        </span>
      </Tooltip>

      <Menu.Dropdown>
        <Menu.Label>{t('language')}</Menu.Label>
        {locales!.map((lng) => (
          <Menu.Item
            key={lng}
            onClick={() => changeLanguage(lng)}
            className={cx({ [classes.selectedMenuItem]: locale === lng })}
          >
            {localeNames[lng]}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
