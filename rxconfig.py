import reflex as rx
from reflex.plugins.sitemap import SitemapPlugin

config = rx.Config(
    app_name="sc2_map_forge",
    tailwind={},
    disable_plugins=[SitemapPlugin],
)
