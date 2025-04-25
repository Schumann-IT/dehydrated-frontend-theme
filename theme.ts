import {ThemeOptions} from "@mui/material";
import wallpaper from "./assets/images/wallpaper.png";

// TODO: import from main app
export interface CustomThemeOptions extends ThemeOptions {
    assets: {
        wallpaper: string;
    };
    texts: {
        title: string;
        dashboard?: {
            content: string;
        };
    };
}

export const commonSettings: Partial<CustomThemeOptions> = {
    typography: {
        fontFamily: '"Metric", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {fontWeight: 700, fontSize: "2.5rem"},
        h2: {fontWeight: 700, fontSize: "2rem"},
        body1: {fontSize: "1rem"},
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 600,
                    textTransform: "none",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#003366",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: "#003366",
                },
                h2: {
                    color: "#0066CC",
                },
                h3: {
                    color: "#4D94FF",
                },
            },
        },
    },
    assets: {
        wallpaper: wallpaper,
    },
    texts: {
        title: "Schumann-IT Certificate Management",
        dashboard: {
            content: `
## Certificate management

This is a Frontend for Dehydrated, a lightweight, open-source client for Let's Encrypt that 
automates the process of obtaining and renewing SSL/TLS certificates using the ACME protocol. 

### Usage

- Create – Request a new certificate for a domain.
- Show – Check existing certificates and their expiration.
    - This includes 
        - openssl validation info
        - netscaler deployment status
- Update – Update Certificate.
- Delete – Revoke certificates or remove domain configs.

### Terraform integration

In case you are using terraform to deploy netscaler, you can use the dehydrated 
terraform provider to request the status of a certificate., 
`,
        },
    },
};