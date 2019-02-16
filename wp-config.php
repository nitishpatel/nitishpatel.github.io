<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'moJDf`LPtZKo%T_Csh55U}N$/]ots7tn%&a(u7vf6NPHU51sVEo<d>m|c#7CUj@Y');
define('SECURE_AUTH_KEY',  'Q&z^O|TK8c}B@;MLIN5%XK>51}[-%!6K;Y|em9J3Aas@;S]Iy!c{Q#AknJ@_h#G?');
define('LOGGED_IN_KEY',    '_,0|UaI!N[rp]X^OH?O&1T|d_7vgl;rBcA]4`j</o)0}p6!AKh%kbZl.sqCfAFuW');
define('NONCE_KEY',        ']6`W{;|f7[GC~?RO$cEW3(7Y~2SeIB~r{TH-qht)91C%pj4zS@UNP.OjhN}-1@C<');
define('AUTH_SALT',        'TLxdEK%6^eM.n,1j|7VN1/*ATBJ$jvTEO&TP+W!3-ZlEm[:>v_DS_#]c={,ahPvI');
define('SECURE_AUTH_SALT', 'N-dJj87@7%UgQ%se$hZ2Idh8,#xfd)~kPirKxwg?=&T|Ae|77:du=LB:K>mKCS+6');
define('LOGGED_IN_SALT',   'K4}&oXoo$03Fuc9M2QK+sYWw1ah`.r4p{RYqkf:g~%G{W3XHeZ7y_z0?(5atD_*#');
define('NONCE_SALT',       '8gK7#rpA+5dwspG}*yD;GfHI_HPMI ;wnG/s]GdYHt.%zQI/Pq|oZmqLRI=b}272');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
