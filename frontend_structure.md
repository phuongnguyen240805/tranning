src
│   │       │   middleware.ts
│   │       │
│   │       ├───app
│   │       │   │   colors.scss
│   │       │   │   global.scss
│   │       │   │   polonto.css
│   │       │   │
│   │       │   ├───(app)
│   │       │   │   │   layout.tsx
│   │       │   │   │
│   │       │   │   ├───(preview)
│   │       │   │   │   └───p
│   │       │   │   │       └───[id]
│   │       │   │   │               layout.tsx
│   │       │   │   │               page.tsx
│   │       │   │   │
│   │       │   │   ├───(site)
│   │       │   │   │   │   layout.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───analytics
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───billing
│   │       │   │   │   │   │   page.tsx
│   │       │   │   │   │   │
│   │       │   │   │   │   └───lifetime
│   │       │   │   │   │           page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───cobalt
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───err
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───graphite
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───integrations
│   │       │   │   │   │   └───social
│   │       │   │   │   │       │   layout.tsx
│   │       │   │   │   │       │
│   │       │   │   │   │       └───[provider]
│   │       │   │   │   │           │   page.tsx
│   │       │   │   │   │           │
│   │       │   │   │   │           └───continue
│   │       │   │   │   │                   page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───launches
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───marketplace
│   │       │   │   │   │   │   layout.tsx
│   │       │   │   │   │   │   page.tsx
│   │       │   │   │   │   │
│   │       │   │   │   │   ├───buyer
│   │       │   │   │   │   │       page.tsx
│   │       │   │   │   │   │
│   │       │   │   │   │   └───seller
│   │       │   │   │   │           page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───messages
│   │       │   │   │   │   │   layout.tsx
│   │       │   │   │   │   │   page.tsx
│   │       │   │   │   │   │
│   │       │   │   │   │   └───[id]
│   │       │   │   │   │           page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───plugs
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───settings
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   ├───smartcontent
│   │       │   │   │   │       page.tsx
│   │       │   │   │   │
│   │       │   │   │   └───third-party
│   │       │   │   │           page.tsx
│   │       │   │   │
│   │       │   │   ├───api
│   │       │   │   │   └───uploads
│   │       │   │   │       └───[[...path]]
│   │       │   │   │               route.ts
│   │       │   │   │
│   │       │   │   └───auth
│   │       │   │       │   layout.tsx
│   │       │   │       │   page.tsx
│   │       │   │       │   return.url.component.tsx
│   │       │   │       │
│   │       │   │       ├───activate
│   │       │   │       │   │   page.tsx
│   │       │   │       │   │
│   │       │   │       │   └───[code]
│   │       │   │       │           page.tsx
│   │       │   │       │
│   │       │   │       ├───forgot
│   │       │   │       │   │   page.tsx
│   │       │   │       │   │
│   │       │   │       │   └───[token]
│   │       │   │       │           page.tsx
│   │       │   │       │
│   │       │   │       └───login
│   │       │   │               page.tsx
│   │       │   │
│   │       │   └───(extension)
│   │       │       │   layout.tsx
│   │       │       │
│   │       │       └───modal
│   │       │           │   layout.tsx
│   │       │           │   
│   │       │           └───[style]
│   │       │               └───[platform]
│   │       │                       page.tsx
│   │       │
│   │       └───components
│   │           │   signature.tsx
│   │           │
│   │           ├───analytics
│   │           │       analytics.component.tsx
│   │           │       chart-social.tsx
│   │           │       chart.tsx
│   │           │       stars.and.forks.interface.ts
│   │           │       stars.and.forks.tsx
│   │           │       stars.table.component.tsx
│   │           │
│   │           ├───auth
│   │           │   │   activate.tsx
│   │           │   │   after.activate.tsx
│   │           │   │   forgot-return.tsx
│   │           │   │   forgot.tsx
│   │           │   │   login.tsx
│   │           │   │   login.with.oidc.tsx
│   │           │   │   nayner.auth.button.tsx
│   │           │   │   register.tsx
│   │           │   │
│   │           │   └───providers
│   │           │       │   farcaster.provider.tsx
│   │           │       │   github.provider.tsx
│   │           │       │   google.provider.tsx
│   │           │       │   oauth.provider.tsx
│   │           │       │   wallet.provider.tsx
│   │           │       │
│   │           │       └───placeholder
│   │           │               wallet.ui.provider.tsx
│   │           │
│   │           ├───autopost
│   │           │       autopost.tsx
│   │           │
│   │           ├───billing
│   │           │       billing.component.tsx
│   │           │       faq.component.tsx
│   │           │       lifetime.deal.tsx
│   │           │       main.billing.component.tsx
│   │           │       purchase.crypto.tsx
│   │           │
│   │           ├───cobalt
│   │           │       CobaltComponent.tsx
│   │           │
│   │           ├───graphite
│   │           │       GraphiteComponent.tsx
│   │           │
│   │           ├───launches
│   │           │   │   add.provider.component.tsx
│   │           │   │   ai.image.tsx
│   │           │   │   bot.picture.tsx
│   │           │   │   calendar.context.tsx
│   │           │   │   calendar.tsx
│   │           │   │   customer.modal.tsx
│   │           │   │   filters.tsx
│   │           │   │   general.preview.component.tsx
│   │           │   │   integration.redirect.component.tsx
│   │           │   │   internal.channels.tsx
│   │           │   │   launches.component.tsx
│   │           │   │   layout.standalone.tsx
│   │           │   │   merge.post.tsx
│   │           │   │   new.post.tsx
│   │           │   │   polonto.tsx
│   │           │   │   repeat.component.tsx
│   │           │   │   select.customer.tsx
│   │           │   │   separate.post.tsx
│   │           │   │   set.context.tsx
│   │           │   │   settings.modal.tsx
│   │           │   │   statistics.tsx
│   │           │   │   tags.component.tsx
│   │           │   │   time.table.tsx
│   │           │   │   up.down.arrow.tsx
│   │           │   │
│   │           │   ├───comments
│   │           │   │       comment.component.tsx
│   │           │   │
│   │           │   ├───generator
│   │           │   │       generator.tsx
│   │           │   │
│   │           │   ├───helpers
│   │           │   │       date.picker.tsx
│   │           │   │       dnd.provider.tsx
│   │           │   │       isuscitizen.utils.tsx
│   │           │   │       linkedin.component.tsx
│   │           │   │       media.settings.component.tsx
│   │           │   │       new.image.component.tsx
│   │           │   │       pick.platform.component.tsx
│   │           │   │       top.title.component.tsx
│   │           │   │       use.custom.provider.function.ts
│   │           │   │       use.existing.data.tsx
│   │           │   │       use.expend.tsx
│   │           │   │       use.formatting.ts
│   │           │   │       use.hide.top.editor.tsx
│   │           │   │       use.integration.ts
│   │           │   │       use.move.to.integration.tsx
│   │           │   │       use.values.ts
│   │           │   │
│   │           │   ├───menu
│   │           │   │       menu.tsx
│   │           │   │
│   │           │   ├───polonto
│   │           │   │       polonto.picture.generation.tsx
│   │           │   │
│   │           │   └───web3
│   │           │       │   web3.list.tsx
│   │           │       │   web3.provider.interface.ts
│   │           │       │
│   │           │       └───providers
│   │           │               nostr.provider.tsx
│   │           │               telegram.provider.tsx
│   │           │               wrapcaster.provider.tsx
│   │           │
│   │           ├───layout
│   │           │       check.payment.tsx
│   │           │       chrome.extension.component.tsx
│   │           │       click.outside.tsx
│   │           │       continue.provider.tsx
│   │           │       drop.files.tsx
│   │           │       facebook.component.tsx
│   │           │       html.component.tsx
│   │           │       impersonate.tsx
│   │           │       language.component.tsx
│   │           │       layout.context.tsx
│   │           │       layout.settings.tsx
│   │           │       loading.tsx
│   │           │       logout.component.tsx
│   │           │       mode.component.tsx
│   │           │       new.subscription.tsx
│   │           │       organization.selector.tsx
│   │           │       redirect.tsx
│   │           │       settings.component.tsx
│   │           │       support.tsx
│   │           │       title.tsx
│   │           │       tolt.script.tsx
│   │           │       top.menu.tsx
│   │           │       top.tip.tsx
│   │           │       user.context.tsx
│   │           │
│   │           ├───marketplace
│   │           │       buyer.seller.tsx
│   │           │       buyer.tsx
│   │           │       marketplace.provider.tsx
│   │           │       marketplace.tsx
│   │           │       order.list.tsx
│   │           │       order.top.actions.tsx
│   │           │       preview.popup.dynamic.tsx
│   │           │       seller.tsx
│   │           │       special.message.tsx
│   │           │
│   │           ├───media
│   │           │   │   media.component.tsx
│   │           │   │   new.uploader.tsx
│   │           │   │
│   │           │   └───canva
│   │           │           canva-sdk.ts
│   │           │           CanvaModal.tsx
│   │           │           constants.ts
│   │           │
│   │           ├───messages
│   │           │       layout.tsx
│   │           │       messages.tsx
│   │           │
│   │           ├───new-launch
│   │           │   │   add.edit.modal.tsx
│   │           │   │   add.post.button.tsx
│   │           │   │   bold.text.tsx
│   │           │   │   editor.tsx
│   │           │   │   manage.modal.tsx
│   │           │   │   picks.socials.component.tsx
│   │           │   │   select.current.tsx
│   │           │   │   store.ts
│   │           │   │   u.text.tsx
│   │           │   │
│   │           │   ├───finisher
│   │           │   │       thread.finisher.tsx
│   │           │   │
│   │           │   └───providers
│   │           │       │   high.order.provider.tsx
│   │           │       │   show.all.providers.tsx
│   │           │       │
│   │           │       ├───bluesky
│   │           │       │       bluesky.provider.tsx
│   │           │       │
│   │           │       ├───continue-provider
│   │           │       │   │   list.tsx
│   │           │       │   │
│   │           │       │   ├───facebook
│   │           │       │   │       facebook.continue.tsx
│   │           │       │   │
│   │           │       │   ├───instagram
│   │           │       │   │       instagram.continue.tsx
│   │           │       │   │
│   │           │       │   └───linkedin
│   │           │       │           linkedin.continue.tsx
│   │           │       │
│   │           │       ├───devto
│   │           │       │   │   devto.provider.tsx
│   │           │       │   │   devto.tags.tsx
│   │           │       │   │   select.organization.tsx
│   │           │       │   │
│   │           │       │   └───fonts
│   │           │       │           SFNS.woff2
│   │           │       │
│   │           │       ├───discord
│   │           │       │       discord.channel.select.tsx
│   │           │       │       discord.provider.tsx
│   │           │       │
│   │           │       ├───dribbble
│   │           │       │       dribbble.provider.tsx
│   │           │       │       dribbble.teams.tsx
│   │           │       │
│   │           │       ├───facebook
│   │           │       │       facebook.provider.tsx
│   │           │       │
│   │           │       ├───hashnode
│   │           │       │       hashnode.provider.tsx
│   │           │       │       hashnode.publications.tsx
│   │           │       │       hashnode.tags.tsx
│   │           │       │
│   │           │       ├───instagram
│   │           │       │       instagram.collaborators.tsx
│   │           │       │       instagram.tags.tsx
│   │           │       │
│   │           │       ├───lemmy
│   │           │       │       lemmy.provider.tsx
│   │           │       │       subreddit.tsx
│   │           │       │
│   │           │       ├───linkedin
│   │           │       │       linkedin.provider.tsx
│   │           │       │
│   │           │       ├───mastodon
│   │           │       │       mastodon.provider.tsx
│   │           │       │
│   │           │       ├───medium
│   │           │       │   │   medium.provider.tsx
│   │           │       │   │   medium.publications.tsx
│   │           │       │   │   medium.tags.tsx
│   │           │       │   │
│   │           │       │   └───fonts
│   │           │       │           Charter Bold Italic.ttf
│   │           │       │           Charter Bold.ttf
│   │           │       │           Charter Italic.ttf
│   │           │       │           Charter Regular.ttf
│   │           │       │           stylesheet.css
│   │           │       │
│   │           │       ├───nostr
│   │           │       │       nostr.provider.tsx
│   │           │       │       
│   │           │       ├───pinterest
│   │           │       │       pinterest.board.tsx
│   │           │       │       pinterest.provider.tsx
│   │           │       │
│   │           │       ├───reddit
│   │           │       │       reddit.provider.tsx
│   │           │       │       subreddit.tsx
│   │           │       │
│   │           │       ├───slack
│   │           │       │       slack.channel.select.tsx
│   │           │       │       slack.provider.tsx
│   │           │       │
│   │           │       ├───telegram
│   │           │       │       telegram.provider.tsx
│   │           │       │
│   │           │       ├───threads
│   │           │       │       threads.provider.tsx
│   │           │       │
│   │           │       ├───tiktok
│   │           │       │       tiktok.provider.tsx
│   │           │       │
│   │           │       ├───vk
│   │           │       │       vk.provider.tsx
│   │           │       │
│   │           │       ├───warpcast
│   │           │       │       subreddit.tsx
│   │           │       │       warpcast.provider.tsx
│   │           │       │
│   │           │       ├───x
│   │           │       │   │   x.provider.tsx
│   │           │       │   │
│   │           │       │   └───fonts
│   │           │       │           Chirp-Bold.woff2
│   │           │       │           Chirp-Regular.woff2
│   │           │       │
│   │           │       └───youtube
│   │           │               youtube.provider.tsx
│   │           │
│   │           ├───notifications
│   │           │       notification.component.tsx
│   │           │
│   │           ├───onboarding
│   │           │       connect.channels.tsx
│   │           │       github.onboarding.tsx
│   │           │       onboarding.tsx
│   │           │
│   │           ├───platform-analytics
│   │           │       platform.analytics.tsx
│   │           │       render.analytics.tsx
│   │           │
│   │           ├───plugs
│   │           │       plug.tsx
│   │           │       plugs.context.ts
│   │           │       plugs.tsx
│   │           │
│   │           ├───post-url-selector
│   │           │       post.url.selector.tsx
│   │           │
│   │           ├───preview
│   │           │       comments.components.tsx
│   │           │       copy.client.tsx
│   │           │       preview.wrapper.tsx
│   │           │
│   │           ├───public-api
│   │           │       public.component.tsx
│   │           │
│   │           ├───sets
│   │           │       sets.tsx
│   │           │
│   │           ├───settings
│   │           │       github.component.tsx
│   │           │       settings.component.tsx
│   │           │       signatures.component.tsx
│   │           │       teams.component.tsx
│   │           │
│   │           ├───smartcontent
│   │           │   │   icons.tsx
│   │           │   │   SideMenu.tsx
│   │           │   │   smartcontent.component.tsx
│   │           │   │   types.ts
│   │           │   │
│   │           │   └───components
│   │           │       │   index.ts
│   │           │       │
│   │           │       ├───AIVideo
│   │           │       │       index.tsx
│   │           │       │
│   │           │       ├───ContentList
│   │           │       │       index.tsx
│   │           │       │
│   │           │       ├───CreateContent
│   │           │       │   │   index.tsx
│   │           │       │   │
│   │           │       │   └───components
│   │           │       │           PlanDialog.tsx
│   │           │       │
│   │           │       ├───Interactions
│   │           │       │   │   index.tsx
│   │           │       │   │
│   │           │       │   └───components
│   │           │       │           StatsCards.tsx
│   │           │       │           TopFanpages.tsx
│   │           │       │           TopPosts.tsx
│   │           │       │           TrendChart.tsx
│   │           │       │
│   │           │       ├───LikedContent
│   │           │       │       index.tsx
│   │           │       │
│   │           │       ├───RunningAds
│   │           │       │       index.tsx
│   │           │       │
│   │           │       ├───SocialManagement
│   │           │       │       context.tsx
│   │           │       │       Douyin.tsx
│   │           │       │       Instagram.tsx
│   │           │       │       SocialManagementBase.tsx
│   │           │       │       Threads.tsx
│   │           │       │       TikTok.tsx
│   │           │       │
│   │           │       ├───Trending
│   │           │       │       index.tsx
│   │           │       │
│   │           │       └───VideoEditor
│   │           │               index.tsx
│   │           │
│   │           ├───standalone-modal
│   │           │       standalone.modal.tsx
│   │           │
│   │           ├───third-parties
│   │           │   │   third-party.component.tsx
│   │           │   │   third-party.function.tsx
│   │           │   │   third-party.list.component.tsx
│   │           │   │   third-party.media.tsx
│   │           │   │   third-party.wrapper.tsx
│   │           │   │
│   │           │   └───providers
│   │           │           heygen.provider.tsx
│   │           │
│   │           ├───ui
│   │           │       translated-label.tsx
│   │           │
│   │           └───webhooks
│   │                   webhooks.tsx