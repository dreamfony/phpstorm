<?php

namespace Drupal\\$module\Entity;

use Drupal\\$module\Entity\\${NAME}Interface;
use Drupal\Core\Annotation\Translation;
use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\Core\Entity\Annotation\ConfigEntityType;

/**
 * Class ${NAME}.
 *
 * @ConfigEntityType#[[$END$]]#
 */
class ${NAME} extends ConfigEntityBase implements ${NAME}Interface {

  /**
   * {@inheritdoc}
   */
  public function label() {
    ${DS}label = parent::label();

    return ${DS}label ?: ${DS}this->id();
  }

}
