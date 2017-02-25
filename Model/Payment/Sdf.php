<?php


namespace Illia\Test\Model\Payment;

class Sdf extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "sdf";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}
