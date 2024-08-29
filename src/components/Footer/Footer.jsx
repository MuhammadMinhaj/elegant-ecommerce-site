import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LinkIcon from '@mui/icons-material/Link';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SendIcon from '@mui/icons-material/Send';
import { Box, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import FooterLayout from './footer-layout';

function Footer() {
  return (
    <Box component="footer" bgcolor="var(--primary)" color="var(--white)">
      <Box className="container" py="3rem">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <FooterLayout
              title="Contact Info"
              subTitle="We are always available for you to pass & get back on the right track."
            >
              {[
                {
                  title: 'Address',
                  subTitle: 'Block # 13, Rowsten street west hampshire South Wales',
                  icon: <ContactSupportIcon fontSize="inherit" />
                },

                {
                  title: 'Tell us the reason for your query',
                  subTitle: 'support@elegent-commerce.com',
                  icon: <AlternateEmailIcon fontSize="inherit" />
                },
                {
                  title: 'Opening & closing time',
                  subTitle: 'Monday To Satarday : 8am - 6pm. Sunaday Closed',
                  icon: <AccessTimeFilledIcon fontSize="inherit" />
                },

                {
                  title: 'Phone',
                  subTitle: '+45-562-453-3465',
                  icon: <PhoneIphoneIcon fontSize="inherit" />
                }
              ].map((info) => (
                <Box key={info.title} display="flex" alignItems="center">
                  <Box fontSize="3rem" color="var(--secondary)">
                    {info.icon}
                  </Box>
                  <Box width="1rem" />
                  <Box>
                    <Typography variant="subtitle1">{info.title}</Typography>
                    <Typography variant="caption">{info.subTitle}</Typography>
                  </Box>
                </Box>
              ))}
            </FooterLayout>
          </Grid>
          <Grid item md={4}>
            <FooterLayout
              title="Quicklinks"
              subTitle="Click on the below link to find out our other exicting items"
            >
              <Grid container spacing={2}>
                {[
                  [
                    {
                      name: 'Make Profit',
                      href: '/'
                    },
                    {
                      name: 'Terms & Conditions',
                      href: '/'
                    },
                    {
                      name: 'Our Partners',
                      href: '/'
                    },
                    {
                      name: 'Privacy Policy',
                      href: '/'
                    },
                    {
                      name: 'FAQs',
                      href: '/'
                    },
                    {
                      name: 'Achievements',
                      href: '/'
                    }
                  ],
                  [
                    {
                      name: 'Privacy Policy',
                      href: '/'
                    },
                    {
                      name: 'FAQs',
                      href: '/'
                    },
                    {
                      name: 'Achievements',
                      href: '/'
                    },
                    {
                      name: 'Terms & Conditions',
                      href: '/'
                    },
                    {
                      name: 'Our Partners',
                      href: '/'
                    }
                  ]
                ].map((list, i) => (
                  <Grid key={i} item md={6}>
                    <Box>
                      {list.map((item) => (
                        <Box key={item.name} display="flex" alignItems="center">
                          <Box color="var(--secondary)">
                            <LinkIcon fontSize="1rem" color="inherit" />
                          </Box>
                          <Box width="1rem" />
                          <Typography
                            component="a"
                            href={item.href}
                            variant="subtitle1"
                            sx={{ '&:hover': { color: 'var(--secondary)' }, color: 'var(--white)' }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </FooterLayout>
          </Grid>
          <Grid item md={4}>
            <FooterLayout
              title="News Letter"
              subTitle="Subscribe to our newsletter to receive latest news & notification on our services."
            >
              <Box pb="2rem">
                <Paper
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '1200px',
                    height: '50px',
                    overflow: 'hidden'
                  }}
                  variant="outlined"
                >
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <Box
                      component="input"
                      sx={{
                        outline: 'none',
                        border: 'none'
                      }}
                      width="100%"
                      p="1rem"
                      placeholder="Email address"
                    />
                    <IconButton>
                      <SendIcon />
                    </IconButton>
                  </Box>
                </Paper>
              </Box>
              <Box>
                <Typography variant="h6">Follow us on the social media</Typography>
                <Box display="flex">
                  <IconButton color="inherit">
                    <FacebookIcon />
                  </IconButton>

                  <IconButton color="inherit">
                    <TwitterIcon />
                  </IconButton>

                  <IconButton color="inherit">
                    <YouTubeIcon />
                  </IconButton>

                  <IconButton color="inherit">
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Box>
            </FooterLayout>
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Box color="var(--white)" py="0.5rem" textAlign="center">
        <Box className="container">
          <Typography color="var(--white)" variant="subtitle1">
            All Rights Reserved. Copyright © 2022
          </Typography>
          <Typography color="var(--white)" variant="subtitle1">
            Developed By{' '}
            <Typography
              component="a"
              href="https://muhammadminhaj.github.io"
              color="var(--white)"
              variant="subtitle1"
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  color: 'var(--secondary)'
                },
                fontWeight: 'bold'
              }}
              target="_blank"
            >
              Muhammad Minhaj
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
