import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

     /* if (fileData.dates && fileData.dates.created) {
        segments.push(`Created on: ${formatDate(fileData.dates.created, cfg.locale)}`);
      } */ 
     //this doesn't work :(

      /*if (fileData.dates) {
        segments.push(`Last updated: ${formatDate(getDate(cfg, fileData)!, cfg.locale)}`)
      }*/

      if (fileData.dates) {
        if (!cfg.displayDateType) {
          throw new Error(
            `Field 'displayDateType' was not set in the configuration object of quartz.config.ts. See https://quartz.jzhao.xyz/configuration#general-configuration for more details.`
          );
        }
      
        cfg.displayDateType.forEach((dateType) => {
          let dateTypeLabel = (dateType === "created") ? 'Modified:' : 'Created:';
          segments.push(`${dateTypeLabel} ${formatDate(fileData.dates?.[dateType])}`);
        });
      }
      
      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(displayedTime)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segmentsElements}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
